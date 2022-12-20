import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import Img from '../../atoms/Img/Img';
import MoreIcon from '../../../assets/images/icon-more-vertical.png';
import { ProfileMoreWrapper } from './styled';

const UserProfileMore = ({ data }) => {
  const { author } = data;
  return (
    <ProfileMoreWrapper>
      <Link to='/profile'>
        <UserProfile
          src={author.image}
          userName={author.username}
          userId={author.accountname}
        />
      </Link>
      <Img src={MoreIcon} alt='게시글 설정' width='18px' height='18px' />
    </ProfileMoreWrapper>
  );
};

export default UserProfileMore;
