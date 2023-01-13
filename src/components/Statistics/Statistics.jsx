import PropTypes from 'prop-types';
import {
    TitleSiction,
    StatList,
    StatItem,
    StatLabel,
    StatPercentage,
    StatSection
} from './Statistics.style';

function Statistics(
   { title, stats }
    ) {
return (
    <StatSection>
  {title.length > 0 && <TitleSiction>{title}</TitleSiction>}

  <StatList>
  {stats.map(({ id, label, percentage }) => (
        <StatItem key={id}>
        <StatLabel>{label}</StatLabel>
        <StatPercentage>{percentage}</StatPercentage>
      </StatItem>
   )) }
</StatList>
</StatSection>
)
}

Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};

export { Statistics };