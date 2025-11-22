import Text from '@/components/Text/Text';
import { SectionProps } from '@/types';
import clsx from 'clsx';
import style from './Section.module.scss';

const SectionDefault = ({
  tag,
  title,
  subTitle,
  children,
  className,
  headerClassName,
  variant = 'inner',
  bg,
}: SectionProps) => {
  return (
    <section className={style[`section_${bg}`]}>
      <div className={style[`section_${variant}`]}>
        <div className={clsx(style.section_wrap, className)}>
          <div className={clsx(style.section_header, headerClassName)}>
            {tag && (
              <Text as='span' variant='link' className={style.section_tag}>
                {tag}
              </Text>
            )}
            <Text as='h2' variant='heading1'>
              {title}
            </Text>
            {subTitle}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionDefault;
