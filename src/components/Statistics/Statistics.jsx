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
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id}>
            <ListItemLabel>{label}</ListItemLabel>
            <ListItemPercentage>{percentage}%</ListItemPercentage>
          </ListItem>
        ))}
      </StatList>
    </SectionStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;
