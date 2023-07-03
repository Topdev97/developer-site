interface CardProps {
  orientation: 'Vertical' | 'Horizontal';
  size: 'small' | 'medium' ;

}

export const Card = ({orientation,size}:CardProps) => {
  return <div>Card</div>;
};
