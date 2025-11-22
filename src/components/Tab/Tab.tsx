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
      <div className={clsx(styles.label_wrap, labelClassName)} role='tablist'>
        {tabs.map((tab) => (
          <Button
            key={`tab-${tab.id}`}
            onClick={() => handleTabClick(tab.id)}
            className={clsx(tab.id === activeTabId && styles.active, variant && styles[variant])}
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
