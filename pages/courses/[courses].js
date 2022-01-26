import PageComponents from 'containers/Courses/courses';
import coursesInformation from 'utils/courses';

const Page = (props) => {
    return (<PageComponents {...props} />)
}

Page.getInitialProps = async ({ query }) => {
    const {courses} = query;
    const data = coursesInformation.find(c => c.url === courses);
    return { data };
};

export default Page;