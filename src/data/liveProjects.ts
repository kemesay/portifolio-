export interface LiveProject {
  id: string;
  title: string;
  org: string;
  url: string;
  color: string;
  tag: string;
}

export const liveProjects: LiveProject[] = [
  {
    id: 'souqpass',
    title: 'Souqpass Digital Lending',
    org: 'Cooperative Bank of Oromia',
    url: 'https://souqpass.coopbankoromiasc.com/',
    color: '#00FFB2',
    tag: 'Fintech · Live',
  },
  {
    id: 'oda',
    title: 'ODA Transportation',
    org: 'United States · Remote',
    url: 'https://odatransportation.com/',
    color: '#00D4FF',
    tag: 'Logistics · Live',
  },
  {
    id: 'michu',
    title: 'Michu Digital Lending',
    org: 'AI Lending Bot',
    url: 'https://t.me/michudigitallending',
    color: '#FFB800',
    tag: 'AI Bot · Live',
  },
];
