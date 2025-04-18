
import { render, screen } from '@testing-library/react';
import ArticleList from '@/components/custom/article-list';
import { Article } from '@/interfaces';


const articles: Article[] = [
    {
      id: 1,
      title: 'Test Article',
      abstract: 'This is a test abstract.',
      byline: 'By Test Author',
      published_date: '2025-04-14',
      url: 'https://example.com/test-article',
      media: [],
    },
  ];


test('renders articles', () => {
 
  render(<ArticleList articles={articles} />);
  expect(screen.getByText('Test Article')).toBeInTheDocument();

});