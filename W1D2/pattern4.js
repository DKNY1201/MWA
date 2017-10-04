/**
 * Created by Bi on 10/3/17.
 */
function Course() {
    this.courseName = 'CS444';
    this.getCourseName = () => {
        console.log(this.courseName);
    }
}

module.exports = Course;