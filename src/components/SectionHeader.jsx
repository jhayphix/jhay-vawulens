const SectionHeader = ({ sectionName, icon, className }) => {
  return (
    <div className={`h2 my-5 ${className}`}>
      <i className={`${icon} j-fa-crown `}></i>
      {sectionName}
    </div>
  );
};

export default SectionHeader;
