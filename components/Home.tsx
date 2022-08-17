import {Component} from 'react';

export const Home: React.FC = () => {

  const renderBody = () => {
    return (
      <div>
        Home
      </div>
    );
  };

  return (
    <div>
      {renderBody()}
    </div>
  );
};