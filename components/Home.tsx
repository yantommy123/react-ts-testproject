import { Component } from 'react';
import React=require('react');

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