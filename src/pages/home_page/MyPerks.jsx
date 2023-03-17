const MyPerks = () => {
  return (
    <div className="abilities" id="skills">
      <hr />
      <div className="abilities-tree">
        <div className="experiences">
          <h1>Work experiences</h1>
          <div className="perksComponents">
            <p>
              <strong>2022-2023</strong>
            </p>
            <p className="abilities-titles">Marketing Automation Specialist for MUZIKER, a.s.</p>
            <p>Coding in HTML, CSS, Javascript and Jinja2. Editing eshop website from marketing persective and adding weblayer, widgets, banners etc. Coding and automating newsletters through Bloomreach (Exponea) as well as making analysis.</p>
          </div>
          <div className="perksComponents">
            <p>
              <strong>2019-2022</strong>
            </p>
            <p className="abilities-titles">Electrician for JUT-EL, s.r.o.</p>
            <p>Part-time job during summer and also school year in Germany, France and Slovakia.</p>
          </div>
        </div>
        <div className="education">
          <h1>Education</h1>
          <div className="perksComponents">
            <p>
              <strong>2023</strong>
            </p>
            <p className="abilities-titles">React For Rest Of Us (In progress...)</p>
            <p>Course at Udemy by Brad Shiff. ReactJS, React hooks, router, SPA (single page applications), etc.</p>
          </div>
          <div className="perksComponents">
            <p>
              <strong>2022</strong>
            </p>
            <p className="abilities-titles">The Web Developer Bootcamp 2022</p>
            <p>Course at Udemy by Colt Steele. The Web Developer Bootcamp.</p>
          </div>
          <div className="perksComponents">
            <p>
              <strong>2019-2022</strong>
            </p>
            <p className="abilities-titles">University of Economics in Bratislava</p>
            <p>Bachelor's Degree in International Economic Relations at Faculty of International Relations.</p>
          </div>
          <div className="perksComponents">
            <p>
              <strong>2014-2018</strong>
            </p>
            <p className="abilities-titles">Polytechnic Vocational High School in Zlaté Moravce</p>
            <p>Major: Mechanic electrician</p>
          </div>
        </div>
        <div className="skills">
          <div>
            <h1>Skills</h1>

            <h2>Programming skills</h2>
            <p>
              <strong>Javascript</strong> - Skillful
            </p>
            <p>
              <strong>CSS(SCSS)</strong> - Advanced
            </p>
            <p>
              <strong>HTML</strong> - Advanced
            </p>
            <p>
              <strong>ReactJS</strong> - Basics
            </p>
            <p>
              <strong>Jinja2</strong> - Skillful
            </p>
            <p>
              <strong>Git/Github</strong> - Basics
            </p>
            <p>
              <strong>Bootstrap</strong> - Basics
            </p>
            <p>
              <strong>MongoDB</strong> - Beginner
            </p>
            <p>
              <strong>Bloomreach Engagement</strong> - Skillful
            </p>
            <p>
              <strong>Microsoft Office</strong> - Advanced
            </p>

            <h2>Languages</h2>
            <p>
              <strong>English</strong> - C1
            </p>
            <p>
              <strong>German</strong> - A1
            </p>
            <p>
              <strong>Slovak/Czech</strong> - C2
            </p>

            <h2>My other skills</h2>
            <p>
              <strong>Electrician</strong> - Advanced (Yes, I can repair you light/outlet at office)
            </p>
            <p>
              <strong>Mechanic</strong> - Advanced
            </p>
            <p>
              <strong>Googling</strong> - Expert
            </p>
          </div>

          {/* <div>
                        <h2>Personality Skills</h2>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default MyPerks;
