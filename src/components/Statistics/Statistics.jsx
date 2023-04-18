import {
  StatsBox,
  StatsTitle,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsPercentage,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsBox>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatsList>
        {stats.map(stat => {
          return (
            <StatsItem key={stat.id}>
              <StatsLabel>{stat.label}</StatsLabel>
              <StatsPercentage>{stat.percentage}%</StatsPercentage>
            </StatsItem>
          );
        })}
      </StatsList>
    </StatsBox>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
