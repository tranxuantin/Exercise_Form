import { ErrorMessage, Form, Formik } from "formik";
import validation from "./validateCovidForm";

const CovidForm = () => {
  const handleFormSubmit = (values, event) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          idCard: "",
          year: "",
          gender: "male",
          nation: "",
          company: "",
          position: "",
          check: false,
          city: "",
          district: "",
          phuong: "",
          sonha: "",
          phone: "",
          emailCovidForm: "",
          where: "",
          checkSymptom: "",
          checkNear: "",
        }}
        validationSchema={validation}
        onSubmit={handleFormSubmit}
      >
        {({ values, handleSubmit, handleChange, handleBlur, resetForm }) => (
          <>
            <Form>
              <h1>To khai y te</h1>

              <div>
                <label htmlFor="">Ho Ten</label>
                <input
                  type="text"
                  className="className"
                  id="IDName"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="name" component="small" className="error" />
              </div>

              <div>
                <label htmlFor="">So CCCD, CMND</label>
                <input
                  type="number"
                  className="classIDCard"
                  id="IDCard"
                  name="idCard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="idCard"
                  component="small"
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="">Nam Sinh</label>
                <input
                  type="number"
                  className="classYear"
                  id="IDYear"
                  name="year"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="year" component="small" className="error" />
              </div>

              <div>
                <label htmlFor="">Gioi Tinh</label>
                <input
                  type="radio"
                  className="classGender"
                  id="IDGenderMale"
                  name="gender"
                  onChange={handleChange}
                  value="male"
                  defaultChecked={values.gender === "male"}
                />
                Male
                <input
                  type="radio"
                  className="classGender"
                  id="IDGenderFemale"
                  name="gender"
                  onChange={handleChange}
                  value="female"
                  defaultChecked={values.gender === "female"}
                />
                Female
              </div>

              <div>
                <label htmlFor="">Quoc Tich</label>
                <input
                  type="text"
                  className="classNation"
                  id="IDNation"
                  name="nation"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="nation"
                  component="small"
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="">Cong ty lam viec</label>
                <input
                  type="text"
                  className="classCompany"
                  id="IDCompany"
                  name="company"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="company"
                  component="small"
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="">Bo phan lam viec</label>
                <input
                  type="text"
                  className="classPosition"
                  id="IDPosition"
                  name="position"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="position"
                  component="small"
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="">Co the bao hiem y te</label>
                <input
                  type="radio"
                  className="classCheck"
                  id="IDCheck"
                  name="check"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultChecked={values.check === true}
                />
              </div>

              <h1>Dia Chi Lien Lac Tai Viet Nam</h1>
              <div>
                <label htmlFor="">Tinh Thanh</label>
                <input
                  type="text"
                  className="classCity"
                  id="IDCity"
                  name="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="city" component="small" className="error" />
              </div>

              <div>
                <label htmlFor="">Quan Huyen</label>
                <input
                  type="text"
                  className="classDistrict"
                  id="IDDistrict"
                  name="district"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="district"
                  component="small"
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="">Phuong Xa</label>
                <input
                  type="text"
                  className="classPhuong"
                  id="IDPhuong"
                  name="phuong"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="phuong"
                  component="small"
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="">So Nha</label>
                <input
                  type="number"
                  className="classSonha"
                  id="IDSonha"
                  name="sonha"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="sonha"
                  component="small"
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="">Dien Thoai</label>
                <input
                  type="number"
                  className="classPhone"
                  id="IDPhone"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="phone"
                  component="small"
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="classEmailCovidForm"
                  id="IDEmailCovidForm"
                  name="emailCovidForm"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="emailCovidForm"
                  component="small"
                  className="error"
                />
              </div>

              <h1>Thong Tin Khai Bao</h1>

              <div>
                <label htmlFor="">Di dau ?</label>
                <input
                  type="text"
                  className="classWhere"
                  id="IDWhere"
                  name="where"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div>
                <label htmlFor="">Dau Hieu</label>
                <input
                  type="checkbox"
                  value="Ho"
                  name="checkSymptom"
                  onChange={handleChange}
                />
                Ho
                <input
                  type="checkbox"
                  value="Kho_Tho"
                  name="checkSymptom"
                  onChange={handleChange}
                />
                Kho Tho
                <input
                  type="checkbox"
                  value="Sot"
                  name="checkSymptom"
                  onChange={handleChange}
                />
                Sot
                <input
                  type="checkbox"
                  value="Binh_Thuong"
                  name="checkSymptom"
                  onChange={handleChange}
                />
                Binh Thuong
                <ErrorMessage
                  name="checkSymptom"
                  component="small"
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="">Tiep Xuc voi ai</label>
                <input
                  type="checkbox"
                  value="Gia_Dinh"
                  name="checkNear"
                  onChange={handleChange}
                />
                Gia Dinh
                <input
                  type="checkbox"
                  value="Ban_Be"
                  name="checkNear"
                  onChange={handleChange}
                />
                Ban Be
                <input
                  type="checkbox"
                  value="Nguoi_Than"
                  name="checkNear"
                  onChange={handleChange}
                />
                Nguoi Than
                <input
                  type="checkbox"
                  value="Khong"
                  name="checkNear"
                  onChange={handleChange}
                />
                Khong
                <ErrorMessage
                  name="checkNear"
                  component="small"
                  className="error"
                />
              </div>

              <div>
                <button type="submit" onSubmit={handleSubmit}>
                  Submit
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default CovidForm;
