import CardSlider from '@/components/CardSlider/CardSlider';
import Img from '@/components/Img/Img';
import Tab from '@/components/Tab/Tab';
import Text from '@/components/Text/Text';
import { CardItem, TabItem } from '@/types/index';
import clsx from 'clsx';
import style from './Section.module.scss';
import SectionDefault from './SectionDefault';

const mainTabs: TabItem[] = [
  {
    id: '0',
    label: (
      <Text as='span' variant='heading2' className=''>
        탭 영역 1
      </Text>
    ),
    content: <Img src='image/img_tab_1.png' alt='' />,
  },
  {
    id: '1',
    label: (
      <Text as='span' variant='heading2' className=''>
        탭 영역 2
      </Text>
    ),
    content: <Img src='image/img_tab_2.png' alt='' />,
  },
  {
    id: '2',
    label: (
      <Text as='span' variant='heading2' className=''>
        탭 영역 3
      </Text>
    ),
    content: <Img src='image/img_tab_3.png' alt='' />,
  },
];

const mainCards: CardItem[] = [
  {
    id: '0',
    label: (
      <Text as='p' variant='heading2'>
        과제용 카드
      </Text>
    ),
    content: (
      <Text as='p' variant='paragraph'>
        인터렉션, 코드 구조등을 자유롭게 구현하세요.
      </Text>
    ),
    imgSrc: 'image/img_card.png',
    ariaLabel: '1',
  },
  {
    id: '1',
    label: (
      <Text as='p' variant='heading2'>
        과제용 카드 (2줄 테스트)
      </Text>
    ),
    content: (
      <Text as='p' variant='paragraph'>
        인터렉션, 코드 구조등을 자유롭게 구현하세요. 인터렉션, 코드 구조등을 자유롭게 구현하세요.
      </Text>
    ),
    imgSrc: 'image/img_card.png',
    ariaLabel: '1',
  },
  {
    id: '2',
    label: (
      <Text as='p' variant='heading2'>
        과제용 카드
      </Text>
    ),
    content: (
      <Text as='p' variant='paragraph'>
        인터렉션, 코드 구조등을 자유롭게 구현하세요.
      </Text>
    ),
    imgSrc: 'image/img_card.png',
    ariaLabel: '2',
  },
  {
    id: '3',
    label: (
      <Text as='p' variant='heading2'>
        과제용 카드
      </Text>
    ),
    content: (
      <Text as='p' variant='paragraph'>
        인터렉션, 코드 구조등을 자유롭게 구현하세요.
      </Text>
    ),
    imgSrc: 'image/img_card.png',
    ariaLabel: '3',
  },
];

const SectionMain = () => {
  return (
    <div>
      <SectionDefault
        tag='Syntekabio'
        title='이 페이지는 테스트 중입니다'
        subTitle={
          <Text as='p' variant='paragraph' className={style.section_subtitle}>
            면접 과제용으로 제작된 샘플 페이지입니다.
          </Text>
        }
      >
        <div className={style.section_content}>
          <Img src='image/img_main_ipad.png' alt='' className={style.gradient} width={907} />{' '}
        </div>
      </SectionDefault>

      <SectionDefault
        title='테스트용 영상 단락'
        subTitle={
          <Text as='p' variant='paragraph' className={style.section_subtitle}>
            면접 과제용으로 제작된 샘플 영상 단락입니다.
            <br />
            사용자가 해당 단락이 화면에 보일 경우 영상이 재생되게 구현하세요.
          </Text>
        }
      >
        <div className={clsx(style.section_content, style.section_video)}>
          <Img src='image/img_video_cover.png' alt='' />
        </div>
      </SectionDefault>

      <SectionDefault
        title='테스트용 탭 영역 단락 입니다'
        subTitle={
          <Text as='p' variant='paragraph' className={style.section_subtitle}>
            면접 과제용으로 제작된 샘플 탭 단락입니다.
            <br />
            인터렉션, 코드 구조등을 자유롭게 구현하세요.
          </Text>
        }
      >
        <div className={style.section_content}>
          <Tab
            tabs={mainTabs}
            defaultId='0'
            variant='underline'
            className={style.section_tabs}
            labelClassName={style.section_tab_label}
            contentClassName={style.section_tab_content}
          />
        </div>
      </SectionDefault>

      <SectionDefault
        title='테스트용 이미지 카드 단락입니다'
        subTitle={
          <Text as='p' variant='paragraph' className={style.section_subtitle}>
            면접 과제용으로 제작된 샘플 <br />
            단락입니다.인터렉션, 코드 구조등을 자유롭게 구현하세요.
          </Text>
        }
        className={style.card}
        headerClassName={style.card_header}
        variant='out'
        bg='green'
      >
        <div className={clsx(style.section_content, style.section_slider)}>
          <CardSlider cards={mainCards} imgHeight={460} className={style.slider} />
        </div>
      </SectionDefault>
    </div>
  );
};

export default SectionMain;
