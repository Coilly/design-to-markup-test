import Button from '@/components/Button/Button';
import { TabProps } from '@/types';
import clsx from 'clsx';
import { useState } from 'react';
import styles from './Tab.module.scss';

const Tab = ({
  tabs,
  defaultId,
  variant = 'underline',
  className,
  labelClassName,
  contentClassName,
  onChange,
}: TabProps) => {
  const [activeTabId, setActiveTabId] = useState(defaultId || (tabs.length > 0 ? tabs[0].id : ''));

  const handleTabClick = (id: string) => {
    if (id === activeTabId) return;
    setActiveTabId(id);
    if (onChange) onChange(id);
  };

  const activeTab = tabs.find((tab) => tab.id === activeTabId);

  return (
    <div className={className}>
      <div className={clsx(styles.label_wrap, labelClassName)} role='tablist' aria-label='탭 메뉴'>
        {tabs.map((tab, index) => (
          <Button
            key={`tab-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => handleTabClick(tab.id)}
            className={clsx(tab.id === activeTabId && styles.active, variant && styles[variant])}
            role='tab'
            aria-selected={tab.id === activeTabId}
            aria-controls={`tabpanel-${tab.id}`}
            tabIndex={tab.id === activeTabId ? 0 : -1}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <div role='tabpanel' id={`tabpanel-${activeTabId}`} className={contentClassName}>
        {activeTab?.content}
      </div>
    </div>
  );
};

export default Tab;
