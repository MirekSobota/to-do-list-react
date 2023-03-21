import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
  <section className="section">
    <div className="section__container">
      <div className="section__subHeader ">{title}</div>
      {extraHeaderContent}
    </div>
    {body}
  </section>
);

export default Section;


