
import Badge from "../components/Badge";

export default {
  title: 'Badge',
  component: Badge,
};



export const h1 = () => <Badge label1="Example Heading" label2="New" mode="primary" color1="black"  size="xl"/>;
export const h2 = () => <Badge label1="Example Heading" label2="New" mode="secondary" color1="black"  size="lg"/>;
export const h3 = () => <Badge label1="Example Heading" label2="New" mode="success" color1="black"  size="base"/>;
export const h4 = () => <Badge label1="Example Heading" label2="New" mode="warning" color1="black"  size="base"/>;
export const h5 = () => <Badge label1="Example Heading" label2="New" mode="info" color1="black"  size="sm"/>;
export const h6 = () => <Badge label1="Example Heading" label2="New" mode="dark" color1="black"  size="xs"/>;