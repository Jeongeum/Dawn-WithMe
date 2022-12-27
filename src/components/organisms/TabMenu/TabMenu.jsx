import { useLocation } from 'react-router-dom';
import Img from '../../atoms/Img/Img';
import homeImg from '../../../assets/images/icon-home.png';
import homeImgOn from '../../../assets/images/icon-home-fill.png';
import noticeImg from '../../../assets/images/icon-notice.png';
import noticeImgOn from '../../../assets/images/icon-notice-fill.png';
import messageImg from '../../../assets/images/icon-message-circle.png';
import messageImgOn from '../../../assets/images/icon-message-circle-fill.png';
import profileImg from '../../../assets/images/icon-user.png';
import profileImgOn from '../../../assets/images/icon-user-fill.png';
import BottomNavBarWrapper, { TabNavLink } from './styled';

const TabMenu = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <BottomNavBarWrapper>
      <TabNavLink to='/home'>
        <Img src={pathname === '/home' ? homeImgOn : homeImg} />
        <p>홈</p>
      </TabNavLink>
      <TabNavLink to='/feed'>
        <Img src={pathname === '/feed' ? noticeImgOn : noticeImg} />
        <p>자유게시판</p>
      </TabNavLink>
      <TabNavLink to='/chat'>
        <Img src={pathname === '/chat' ? messageImgOn : messageImg} />
        <p>채팅</p>
      </TabNavLink>
      <TabNavLink to='/profile'>
        <Img src={pathname === '/profile' ? profileImgOn : profileImg} />
        <p>프로필</p>
      </TabNavLink>
    </BottomNavBarWrapper>
  );
};

export default TabMenu;
