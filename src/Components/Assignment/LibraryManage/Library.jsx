import { Form, Formik, Field, ErrorMessage } from "formik";
import validation from "./validation";
import { useState } from "react";

const Library = () => {
  const [storage, setStorage] = useState([]);
  const [IDOfBook, setIDOfBook] = useState(0);
  const [placeNeedEdit, setPlaceNeedEdit] = useState(-1);

  const handleSubmitForm = (values, functionsetting) => {
    setStorage((previousStorage) => [
      ...previousStorage,
      {
        ID: `${IDOfBook}`,
        title: `${values.title}`,
        number: `${values.number}`,
      },
    ]);

    setIDOfBook(IDOfBook + 1);

    functionsetting.resetForm({ title: "", number: "" });
  };

  const handleEdit = (book, setFieldValue) => {
    const indexOfObjectNeedToIndex = storage.findIndex(
      (findIndexOfBook) =>
        findIndexOfBook.ID === book.ID &&
        findIndexOfBook.title === book.title &&
        findIndexOfBook.number === book.number
    );

    setFieldValue("title", storage[indexOfObjectNeedToIndex].title);
    setFieldValue("number", storage[indexOfObjectNeedToIndex].number);

    setPlaceNeedEdit(indexOfObjectNeedToIndex);
  };

  const handleUpdate = (values, event, resetForm) => {
    const newStorage = [...storage];
    const oldID = newStorage[placeNeedEdit].ID;
    const newvalues = { ID: `${oldID}`, ...values };
    newStorage.splice(placeNeedEdit, 1, newvalues);
    setStorage(newStorage);

    setPlaceNeedEdit(-1);

    event.preventDefault();

    resetForm({ title: "", number: "" });
  };

  const handleDelete = () => {
    const newStorage = [...storage];
    newStorage.splice(placeNeedEdit, 1);
    setStorage(newStorage);

    setPlaceNeedEdit(-1);
  };

  return (
    <>
      <Formik
        initialValues={{ title: "", number: "" }}
        validationSchema={validation}
        onSubmit={handleSubmitForm}
        enableReinitialize={true}
      >
        {({ values, handleSubmit, resetForm, setFieldValue }) => (
          <>
            <Form>
              <div>
                <label htmlFor="">Tieu de</label>
                <Field
                  type="text"
                  className="classTitle"
                  id="IDTitle"
                  name="title"
                  value={values.title}
                />
                <ErrorMessage name="title" component="p" />
              </div>

              <div>
                <label htmlFor="">So luong</label>
                <Field
                  type="number"
                  className="classNumber"
                  id="IDNumber"
                  name="number"
                  value={values.number}
                />
                <ErrorMessage name="number" component="p" />
              </div>

              <div>
                {placeNeedEdit >= 0 ? (
                  <button
                    type="button"
                    onClick={(event) => handleUpdate(values, event, resetForm)}
                  >
                    Update
                  </button>
                ) : (
                  <button type="submit" onSubmit={handleSubmit}>
                    Submit
                  </button>
                )}
              </div>
            </Form>

            <div>
              <h1>List of Book</h1>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Number</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {storage &&
                    storage.map((book) => {
                      return (
                        <tr>
                          <td>{book.title}</td>
                          <td>{book.number}</td>
                          <td>
                            <button
                              type="button"
                              onClick={() => handleEdit(book, setFieldValue)}
                            >
                              Edit
                            </button>
                            <button type="button" onClick={handleDelete}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </Formik>
    </>
  );
};

export default Library;
