import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../index';
import React from 'react';

describe('Navbar Component', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  test('renders all navigation buttons', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(5);
  });

  test('renders all images with correct alt text for accessibility', () => {
    const expectedAltTexts = [
      'burguerMenu',
      'searchIcon',
      'logoIcon',
      'loginIcon',
      'shoppingCartIcon'
    ];

    expectedAltTexts.forEach(altText => {
      const image = screen.getByAltText(altText);
      expect(image).toBeInTheDocument();
    });
  });

  test('applies correct CSS classes to buttons', () => {
    const buttons = screen.getAllByRole('button');
    
    buttons.forEach(button => {
      expect(button).toHaveClass('btn');
    });
  });

  test('applies correct CSS classes to icons', () => {
    expect(screen.getByAltText('burguerMenu')).toHaveClass('icon', 'icon__burguerMenu');
    expect(screen.getByAltText('searchIcon')).toHaveClass('icon', 'icon__search');
    expect(screen.getByAltText('logoIcon')).toHaveClass('icon', 'icon__logo');
    expect(screen.getByAltText('loginIcon')).toHaveClass('icon', 'icon__login');
    expect(screen.getByAltText('shoppingCartIcon')).toHaveClass('icon', 'icon__shoppingCart');
  });

  test('renders images with correct dimensions', () => {
    const standardIcons = [
      'burguerMenu',
      'searchIcon',
      'loginIcon',
      'shoppingCartIcon'
    ];

    standardIcons.forEach(altText => {
      const icon = screen.getByAltText(altText);
      expect(icon).toHaveAttribute('width', '25');
      expect(icon).toHaveAttribute('height', '25');
    });

    const logoIcon = screen.getByAltText('logoIcon');
    expect(logoIcon).toHaveAttribute('width', '187');
    expect(logoIcon).toHaveAttribute('height', '25');
  });
});

