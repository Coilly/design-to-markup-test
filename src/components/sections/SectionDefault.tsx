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
  headingLevel = 'h2',
}: SectionProps) => {
  return (
    <section className={clsx(style.section, style[`section_${bg}`])}>
      <div className={style[`section_${variant}`]}>
        <div className={clsx(style.section_wrap, className)}>
          <div className={clsx(style.section_header, headerClassName)}>
            {tag && (
              <Text as='span' variant='link' className={style.section_tag}>
                {tag}
              </Text>
            )}
            <Text as={headingLevel} variant='heading1'>
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
