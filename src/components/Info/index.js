import React, { useState } from "react";
import "./Info.scss";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";

const Info = () => {
  const city = ["Tp HCM", "Đồng Nai"];
  const districtHCM = ["Quận Tân Phú", "Quận Tân Bình", "Quận Bình Tân"];
  const districtDN = ["Tp Biên Hòa", "Huyện Lòng Thành", "Huyện Xuân Lộc"];
  const school = ["Đại học", "Cao đẳng", "Trung cấp"];
  const major = ["Kinh doanh dịch vụ", "Công nghệ thông tin"];
  const jobTitleKDDV = ["Thương mại", "Dịch vụ", "Sản xuất"];
  const jobTitleCNTT = ["Frontend Developer", "Backend Developer"];
  const workField = ["Thương mại", "Dịch vụ", "Sản xuất"];
  const [wordFieldSelected, setWordFieldSelected] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    city: "",
    district: "",
    cityBorn: "",
    yearOfBirth: "",
    school: "",
    major: "",
    jobTitle: "",
    wordField: [],
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    if (
      form.firstName === "" ||
      form.lastName === "" ||
      form.city === "" ||
      form.district === "" ||
      form.cityBorn === "" ||
      form.yearOfBirth === "" ||
      form.school === "" ||
      form.major === "" ||
      form.jobTitle === "" ||
      form.wordField.length === 0
    ) {
      return;
    }
    console.log(form);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <div className="info">
      <Form onSubmit={handleSubmit}>
        <h3>Thông tin cá nhân</h3>
        <Row>
          <h5>Họ tên</h5>
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label>Họ và tên đệm</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập họ và tên đệm"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                isInvalid={form.firstName === "" && isSubmit ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập họ và tên đệm
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Label>Tên</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                isInvalid={form.lastName === "" && isSubmit ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập tên
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <h5>Nơi ở hiện tại</h5>
          <Col>
            <Form.Group controlId="city">
              <Form.Label>Thành phố</Form.Label>
              <Form.Select
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                isInvalid={
                  (form.city === "" || form.city === "Chọn thành phố") &&
                  isSubmit
                    ? true
                    : false
                }
              >
                <option value={null}>Chọn thành phố</option>
                {city.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Vui lòng chọn thành phố
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="district">
              <Form.Label>Quận</Form.Label>
              <Form.Select
                value={form.district}
                onChange={(e) => setForm({ ...form, district: e.target.value })}
                isInvalid={
                  (form.district === "" || form.district === "Chọn quận") &&
                  isSubmit
                    ? true
                    : false
                }
              >
                <option value={null}>Chọn quận</option>
                {form.city === "Tp HCM"
                  ? districtHCM.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))
                  : districtDN.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Vui lòng chọn quận
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <h5>Quê quán</h5>
          <Col>
            <Form.Group controlId="city">
              <Form.Label>Thành phố</Form.Label>
              <Form.Select
                value={form.cityBorn}
                onChange={(e) => setForm({ ...form, cityBorn: e.target.value })}
                isInvalid={
                  (form.cityBorn === "" ||
                    form.cityBorn === "Chọn thành phố") &&
                  isSubmit
                    ? true
                    : false
                }
              >
                <option value={null}>Chọn thành phố</option>
                {city.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Vui lòng chọn thành phố
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="yearOfBirth">
          <Form.Label>Năm sinh</Form.Label>
          <Form.Select
            value={form.yearOfBirth}
            onChange={(e) => setForm({ ...form, yearOfBirth: e.target.value })}
            isInvalid={
              (form.yearOfBirth === "" ||
                form.yearOfBirth === "Chọn năm sinh") &&
              isSubmit
                ? true
                : false
            }
          >
            <option value={null}>Chọn năm sinh</option>
            {Array.from({ length: 124 }, (_, i) => i + 1900).map(
              (item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              )
            )}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Vui lòng chọn năm sinh
          </Form.Control.Feedback>
        </Form.Group>

        <h5>Trình độ học vấn</h5>
        <Form.Group controlId="school">
          <Form.Label>Trình độ</Form.Label>
          <Form.Select
            value={form.school}
            onChange={(e) => setForm({ ...form, school: e.target.value })}
            isInvalid={
              (form.school === "" || form.school === "Chọn trình độ") &&
              isSubmit
                ? true
                : false
            }
          >
            <option value={null}>Chọn trình độ</option>
            {school.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Vui lòng chọn trình độ
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="major">
          <Form.Label>Chuyên ngành</Form.Label>
          <Form.Select
            value={form.major}
            onChange={(e) => setForm({ ...form, major: e.target.value })}
            isInvalid={
              (form.major === "" || form.major === "Chọn chuyên ngành") &&
              isSubmit
                ? true
                : false
            }
          >
            <option value={null}>Chọn chuyên ngành</option>
            {major.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Vui lòng chọn chuyên ngành
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="jobTitle">
          <Form.Label>Chức danh</Form.Label>
          <Form.Select
            value={form.jobTitle}
            onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
            isInvalid={
              (form.jobTitle === "" || form.jobTitle === "Chọn chức danh") &&
              isSubmit
                ? true
                : false
            }
          >
            <option value={null}>Chọn chức danh</option>
            {form.major === "Kinh doanh dịch vụ"
              ? jobTitleKDDV.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))
              : jobTitleCNTT.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Vui lòng chọn chức danh
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="wordField">
          <Form.Label>Lĩnh vực làm việc</Form.Label>
          <div>
            {wordFieldSelected.map((item, index) => (
              <div className="tag" key={index}>
                {item}
              </div>
            ))}
          </div>
          <Form.Select
            onChange={(e) => {
              setWordFieldSelected([
                ...new Set(
                  [...wordFieldSelected, e.target.value].filter(
                    (item) => item !== "Chọn lĩnh vực làm việc"
                  )
                ),
              ]);
              setForm({
                ...form,
                wordField: new Set(
                  [...wordFieldSelected, e.target.value].filter(
                    (item) => item !== "Chọn lĩnh vực làm việc"
                  )
                ),
              });
            }}
            isInvalid={form.wordField.length === 0 && isSubmit ? true : false}
          >
            <option value={null}>Chọn lĩnh vực làm việc</option>
            {workField.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Vui lòng chọn lĩnh vực làm việc
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="btn-submit">
          Lưu
        </Button>
      </Form>
      <Alert variant="success" className="alert" show={showAlert}>
        Dữ liệu đã được cập nhật
      </Alert>
    </div>
  );
};

export default Info;
