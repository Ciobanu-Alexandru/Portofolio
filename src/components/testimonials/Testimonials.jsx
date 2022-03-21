import './testimonials.scss';

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: 'Tom Jerry',
      title: 'Senoir Dev',
      img: 'https://www.elegantthemes.com/blog/wp-content/uploads/2018/10/000-Web-UI-Design.png',
      icon: 'assets/facebook.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, in.',
    },
    {
      id: 2,
      name: 'Alex Alexandrescu',
      title: 'Mid Dev',
      img: 'https://i.pinimg.com/originals/22/95/fe/2295fe7ef27b0efe6957973b4bfe24f1.jpg',
      icon: 'assets/youtube.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, in.',
      featured: true,
    },
    {
      id: 2,
      name: 'Sou Mq',
      title: 'Expert Dev',
      img: 'https://i.pinimg.com/originals/ff/44/cd/ff44cddb751805f4bab71d8e33b5ff7d.jpg',
      icon: 'assets/linkedin.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, in.',
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? 'card featured' : 'card'}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img src={d.img} alt="" className="user" />
              <img src={d.icon} className="right" alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
