// app/portfolio/[portfolioDetailsId]/page.jsx
'use client';

import { useParams } from 'next/navigation';
import PortfolioPage from '../page'; // Import the main PortfolioPage component

export default function DynamicPortfolioPage() {
  const params = useParams();
  const { portfolioDetailsId } = params;
  console.log('DynamicPortfolioPage ID:', portfolioDetailsId);

  return <PortfolioPage id={portfolioDetailsId || '1'} />;
}
