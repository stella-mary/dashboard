
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import DoDisturbOutlinedIcon from '@mui/icons-material/DoDisturbOutlined';
import MicrowaveTwoToneIcon from '@mui/icons-material/MicrowaveTwoTone';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import './MenuItems.scss';

export default function MenuItems() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <TvOutlinedIcon className="icons" />
          <span>Dashboard</span>
        </li>
        <li>
          <DoDisturbOutlinedIcon className="icons" />
          <span>Widgets</span>
        </li>
        <li>
          <MicrowaveTwoToneIcon className="icons" />
          <span>UI Elements</span>
          <ArrowDropDownIcon className="icons" />
        </li>
        <li>
          <ImportContactsOutlinedIcon className="icons" />
          <span>Forms</span>
          <ArrowDropDownIcon className="icons" />
        </li>
        <li>
          <AlbumOutlinedIcon className="icons" />
          <span>Data</span>
          <ArrowDropDownIcon className="icons" />
        </li>
        <li>
          <AutoStoriesOutlinedIcon className="icons" />
          <span>Pages</span>
          <ArrowDropDownIcon className="icons" />
        </li>
        <li>
          <GridViewOutlinedIcon className="icons" />
          <span>Apps</span>
          <ArrowDropDownIcon className="icons" />
        </li>
        <li>
          <SummarizeOutlinedIcon className="icons" />
          <span>Documentation</span>
        </li>
      </ul>
    </div>



  );
};


