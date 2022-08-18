import { Component } from 'react';
import React=require('react');
import { Profiles } from './Profiles';

export const Home: React.FC = () => {

  const renderBody = () => {
    return (
      <div>
        {<Profiles />}
      </div>
    );
  };

  return (
    <div>
      {renderBody()}
    </div>
  );
};