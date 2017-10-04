/**
 * Created by Bi on 10/3/17.
 */
function Course() {
    this.courseName = 'CS472';
    this.getCourseName = () => {
        console.log(this.courseName);
    }
}

module.exports = new Course();