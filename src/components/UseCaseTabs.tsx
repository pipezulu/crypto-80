
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UseCaseCard, { UseCaseType } from './UseCaseCard';

interface UseCaseTabsProps {
  useCases: UseCaseType[];
}

const UseCaseTabs: React.FC<UseCaseTabsProps> = ({ useCases }) => {
  return (
    <Tabs defaultValue={useCases[0]?.id} className="horizontal-nav w-full">
      <TabsList className="horizontal-nav-tabs">
        {useCases.map((useCase) => (
          <TabsTrigger 
            key={useCase.id}
            value={useCase.id}
            className="horizontal-nav-tab"
          >
            <div className="horizontal-nav-tab-icon">
              {useCase.icon}
            </div>
            <span className="text-sm font-medium">{useCase.title}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      
      <div className="horizontal-nav-content">
        {useCases.map((useCase) => (
          <TabsContent key={useCase.id} value={useCase.id}>
            <UseCaseCard useCase={useCase} />
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};

export default UseCaseTabs;
