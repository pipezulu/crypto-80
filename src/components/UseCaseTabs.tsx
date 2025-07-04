
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UseCaseCard, { UseCaseType } from './UseCaseCard';

interface UseCaseTabsProps {
  useCases: UseCaseType[];
}

const UseCaseTabs: React.FC<UseCaseTabsProps> = ({ useCases }) => {
  return (
    <Tabs defaultValue={useCases[0]?.id} className="w-full">
      <div className="w-full overflow-hidden">
        <TabsList className="horizontal-nav-tabs w-full">
          {useCases.map((useCase) => (
            <TabsTrigger 
              key={useCase.id}
              value={useCase.id}
              className="horizontal-nav-tab"
              aria-label={useCase.title}
            >
              <div className="horizontal-nav-tab-icon">
                {useCase.icon}
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      
      <div className="mt-4">
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
