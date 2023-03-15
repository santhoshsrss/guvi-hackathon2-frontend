import './feature.css'
import Button from '@mui/material/Button';
export function Feature({name,pic,buy}) {
  return (
    <div className='featured'>
      <div className="featureditems">
        <img src={pic} alt={name} className="featuredimg" />
        <div className="featuredtitles">
          <h2>{name}</h2>
          <Button variant="contained">{buy}</Button>
        </div>
     </div>
    </div>
  );
}
