import PageComponents from 'containers/Shop/shop';
import coursesInformation from 'utils/courses';

const Page = (props) => {
    return (<PageComponents {...props} />)
}

Page.getInitialProps = async ({ query }) => {
    const {shop} = query;
    const data = coursesInformation.find(c => c.url === shop);
    return { data };
};

export default Page;