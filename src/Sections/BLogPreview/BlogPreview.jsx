import './BlogPreview.css';
import blog1 from '../../assets/b1.jpg';
import blog2 from '../../assets/b2.jpg';
import blog3 from '../../assets/b3.jpg';

const blogs = [
  { id: 1, title: "How to care for furniture", img: blog1, desc: "Tips for durability and style." },
  { id: 2, title: "Arrange furniture for space", img: blog2, desc: "Maximize your room layout." },
  { id: 3, title: "Materials for making furniture", img: blog3, desc: "What goes into quality design." },
];

function BlogPreview() {
  return (
    <section id="blog" className="container py-5">
      <h2 className="text-center mb-4">LATEST BLOG</h2>
      <div className="row">
        {blogs.map((b) => (
          <div key={b.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={b.img} className="card-img-top" alt={b.title} />
              <div className="card-body">
                <h5 className="card-title">{b.title}</h5>
                <p className="card-text">{b.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogPreview;