import UserDetails from "@/components/user-details";

interface Props {
  params: {
    slug: string;
  };
}

const UserDetailsPage = ({ params }: Props) => {
  return <UserDetails slug={params.slug} />;
};

export default UserDetailsPage;
