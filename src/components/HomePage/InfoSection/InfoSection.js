import '../HomePage.css';
  
function InfoSection(props) {

    return (
        <div className="info-section desc-section">
            <div className="desc-text">
            <h2>What is Cubstart?</h2>
            <p>Cubstart is a student-run course as part of the <b><a href="https://decal.berkeley.edu/about/decal-program">DeCal Program</a></b> at University of California, Berkeley. We're run by members of <b><a href="https://calhacks.io">Cal Hacks</a></b>, the world's largest collegiate hackathon. We've been running since the Spring 2021 semester, with the aim of supporting underrepresented minorities in their journeys in STEM. </p>

            <p>We have 2 tracks, <b>iOS</b> development and <b>Web</b> development, so students can choose the platform they prefer!</p>

            <img src="assets/cubstart-discussion.jpg" id="cubstart-img"></img>

            <p>Throughout the semester, we provide mentorship and resources for students to learn how to build an app from start to finish: ideation, team-building, programming, pitching, and more. Our students hone these skills in a month-long final project, where they work in teams to develop an app! We end off with Demo Day, a mini-hackathon for students to show off their creations.</p>
            </div>
        </div>
    );
}

export default InfoSection;
