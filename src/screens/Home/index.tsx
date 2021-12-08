import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';

import {
  Component,
  ComponentContent,
  ComponentDot,
  Components,
  ComponentStatus,
  ComponentTitle,
  Container,
  Footer,
  Load,
  Status,
  StatusDate,
  Title,
  UIButton,
  UIButtonTitle
} from './styles';

type StatsType = 'operational' | 'degraded_performance' | 'partial_outage' | 'major_outage';

interface IResponsePage {
  id: string;
  name: string;
  url: string;
  time_zone: string;
  updated_at: string;
}

interface IResponseComponent {
  id: string;
  name: string;
  status: StatsType;
  created_at: string;
  updated_at: string;
  position: number;
  description: string;
  showcase: boolean;
  start_date: null;
  group_id: null;
  page_id: string;
  group: boolean;
  only_show_if_degraded: boolean;
}

interface IResponse {
  page: IResponsePage;
  components: IResponseComponent[];
}

export function Home() {
  const [stats, setStats] = useState({} as IResponse)
  const [loading, setLoading] = useState(true)

  const toDate = (date: Date) => `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`

  async function getGithubStatus() {
    setLoading(true)

    fetch('https://www.githubstatus.com/api/v2/components.json')
      .then<IResponse>(response => response.json())
      .then(setStats)
      .catch(err => Alert.alert('Ops', 'Unable to load status!'))
      .finally(() => setLoading(false))
  }

  const filteredComponents = stats.components?.filter(component => component.id !== '0l2p9nhqnxpd')

  function dotsColor(stats: StatsType) {
    switch (stats) {
      case 'operational': return '#4bee36'
      case 'degraded_performance': return '#e2ee36'
      case 'partial_outage': return '#eeb436'
      case 'major_outage': return '#ee3636'
      default: return '#ffffff'
    }
  }

  useEffect(() => { getGithubStatus() }, [])

  return (
    <Container>
      <Title>Github Status</Title>
      
      {loading
        ? <Load><ActivityIndicator size="large" color="black" /></Load>
        : (
          <Status>
            <StatusDate>{toDate(new Date(stats.page.updated_at))}</StatusDate>

            <Components>
              {filteredComponents.map(component => (
                <Component key={component.id}>
                  <ComponentContent>
                    <ComponentTitle>{component.name}</ComponentTitle>
                    <ComponentStatus>{component.status}</ComponentStatus>
                  </ComponentContent>
                  <ComponentDot color={dotsColor(component.status)} />
                </Component>
              ))}
            </Components>
          </Status>
        )
      }

      <Footer>
        <UIButton onPress={getGithubStatus}>
          <UIButtonTitle>Update Status</UIButtonTitle>
        </UIButton>
      </Footer>
    </Container>
  );
}
