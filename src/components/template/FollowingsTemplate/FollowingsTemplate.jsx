import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import FollowListCard from '../../organisms/FollowListCard/FollowListCard';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import FollowersTemplateWrapper from './styled';

const FollowingsTemplate = ({ followingsData, onClickFollowToggle }) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' text='text' more>
          Followings
        </TopNavBar>
      </HeaderWrapper>
      <MainWrapper>
        <FollowersTemplateWrapper>
          <h2 className='hidden'>팔로워 페이지</h2>
          <FollowListCard
            followData={followingsData}
            onClickFollowToggle={onClickFollowToggle}
          />
        </FollowersTemplateWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default FollowingsTemplate;
