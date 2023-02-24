import PropTypes from 'prop-types';
// import css from 'components/Statistics/Statistics.module.css';
import {
  SectionStatistics,
  StatisticsTitle,
  StatList,
  ListItem,
  ListItemLabel,
  ListItemPercentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatList>
        {stats.map(stat => (
          <ListItem key={stat.id}>
            <ListItemLabel>{stat.label}</ListItemLabel>
            <ListItemPercentage>{stat.percentage}%</ListItemPercentage>
          </ListItem>
        ))}
      </StatList>
    </SectionStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
