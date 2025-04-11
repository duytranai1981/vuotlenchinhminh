import React from "react";

const projects = [
  { src: "/mau-nha-cap-4-mai-thai-don-gian.jpg", title: "Nhà cấp 4 mái Thái", pdf: "/MB1.pdf" },
  { src: "/z6493123248080_4f072b1f7416a979230f5f9ef4c8b795.jpg", title: "Biệt thự sân vườn 2 tầng", pdf: "/MB6.pdf" },
  { src: "/16x9_A_3D_rendered_image_of_a_traditi.png", title: "Biệt phủ kiểu Á Đông" },
  { src: "/23_54_37 10 thg 4, 2025.png", title: "Nhà 1 tầng mái Nhật hiện đại" },
  { src: "/ChatGPT Image 00_06_47 11 thg 4, 2025.png", title: "Nhà mái Thái tường vàng" },
  { src: "/ChatGPT Image 00_29_02 11 thg 4, 2025.png", title: "Nhà phố 2 tầng tối giản" },
  { src: "/ChatGPT Image 00_17_19 11 thg 4, 2025.png", title: "Nhà vườn 1 tầng phối hoa" },
  { src: "/ChatGPT Image 00_12_50 11 thg 4, 2025.png", title: "Nhà hiện đại đơn giản" }
];

export default function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Dự án tiêu biểu</h2>
      <div className="gallery">
        {projects.map((p, idx) => (
          <div className="card" key={idx}>
            <img src={p.src} alt={p.title} />
            <div className="card-content">
              <h3>{p.title}</h3>
              {p.pdf && <a className="button" href={p.pdf} target="_blank">Xem mặt bằng</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}