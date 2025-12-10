import { Card } from "react-bootstrap";

const HomeSidebarLeft = () => {
  return (
    <Card className="mb-3 shadow-sm rounded overflow-hidden">
      {/* Banner in alto */}
      <div
        style={{
          height: "80px",
          backgroundImage:
            "url('https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Foto profilo sovrapposta */}
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "-36px" }}
      >
        <img
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200"
          alt="Jess Williams"
          width={72}
          height={72}
          className="rounded-circle border border-2 border-white"
        />
      </div>

      <Card.Body className="text-center pb-3">
        <h6 className="mb-0">Jess Williams</h6>
        <small className="text-muted">
          Senior Manager at Denali Bank
        </small>

        <hr className="my-3" />

        <div className="py-1">
          <div className="mb-3">
            <div className="text-primary fw-bold" style={{ fontSize: "1.3rem" }}>
              73
            </div>
            <small className="text-muted">Who&apos;s viewed your profile</small>
          </div>

          <div>
            <div className="text-primary fw-bold" style={{ fontSize: "1.3rem" }}>
              35
            </div>
            <small className="text-muted">Views of your posts</small>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HomeSidebarLeft;

