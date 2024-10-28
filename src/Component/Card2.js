import React from 'react'
import './Cardorig.css'
import image11 from "../Assets/Home page.2.Indian Tour Package.1.avif"
import image12 from "../Assets/Home page.2.Indian Tour Package.2.avif"
import image13 from "../Assets/Home page.2.Indian Tour Package.3.avif"
import CardActions from "@mui/material/CardActions";
import Box from '@mui/material/Box';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { FaStar } from "react-icons/fa6";
import { HiCurrencyRupee } from "react-icons/hi2";
import { FaCalendarAlt } from "react-icons/fa";

const Card2 = () => {
  return (
    <div>
    <main class="main bd-grid">
        <article class="card">
            <div class="card-img">
                <img src={image11} alt="image" />
            </div>
      <div>
        <IconButton>
          <div style={{ display: 'flex' , alignItems: 'center' }}>
          <div className="mx-3">
          <HiCurrencyRupee style={{color: "#1100ff"}}/>
          <div>
            <Typography sx={{ fontSize: 15 }}>
              7000/-
            </Typography>
          </div>
          </div>
          <div className="mx-3">
          <FaCalendarAlt style={{color: "#1100ff"}}/>
          <div>
            <Typography sx={{ fontSize: 15 }}>
              2 Days
            </Typography>
          </div>
          </div>
          <div className="mx-3">
          <FaStar style={{color: "#ffcd00"}}/>
          <div>
            <Typography sx={{ fontSize: 15 }}>
              4.1 (4521)
            </Typography>
          </div>
          </div>
          </div>
        </IconButton>
      </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
          </IconButton>
        <IconButton aria-label="share">
          <ShareIcon style={{color: "#000000"}}/>
        </IconButton>
        
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
      <button class="bn632-hover bn18">Know more</button>
      </div>
    </Box>
      </CardActions>
            <div class="card-name">
                <p>Taj Mahal, Agra</p>
            </div>
        </article>
        <article class="card">
            <div class="card-img">
                <img src={image12} alt="image" />
            </div>
      <div>
        <IconButton>
          <div style={{ display: 'flex' , alignItems: 'center' }}>
          <div className="mx-3">
          <HiCurrencyRupee style={{color: "#1100ff"}}/>
          <div>
            <Typography sx={{ fontSize: 15 }}>
              8000/-
            </Typography>
          </div>
          </div>
          <div className="mx-3">
          <FaCalendarAlt style={{color: "#1100ff"}}/>
          <div>
            <Typography sx={{ fontSize: 15 }}>
              3 Days
            </Typography>
          </div>
          </div>
          <div className="mx-3">
          <FaStar style={{color: "#ffcd00"}}/>
          <div>
            <Typography sx={{ fontSize: 15 }}>
              4.4 (4368)
            </Typography>
          </div>
          </div>
          </div>
        </IconButton>
      </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
          </IconButton>
        <IconButton aria-label="share">
          <ShareIcon style={{color: "#000000"}}/>
        </IconButton>
        
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
      <button class="bn632-hover bn18">Know more</button>
      </div>
    </Box>
      </CardActions>
            <div class="card-name">
                <p>Hawa Mahal, Jaipur</p>
            </div>
        </article>
        <article class="card">
            <div class="card-img">
                <img src={image13} alt="image" />
            </div>
      <div>
        <IconButton>
          <div style={{ display: 'flex' , alignItems: 'center' }}>
          <div className="mx-3">
          <HiCurrencyRupee style={{color: "#1100ff"}}/>
          <div>
            <Typography sx={{ fontSize: 15 }}>
              8000/-
            </Typography>
          </div>
          </div>
          <div className="mx-3">
          <FaCalendarAlt style={{color: "#1100ff"}}/>
          <div>
            <Typography sx={{ fontSize: 15 }}>
              4 Days
            </Typography>
          </div>
          </div>
          <div className="mx-3">
          <FaStar style={{color: "#ffcd00"}}/>
          <div>
            <Typography sx={{ fontSize: 15 }}>
              4.5 (8575)
            </Typography>
          </div>
          </div>
          </div>
        </IconButton>
      </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
          </IconButton>
        <IconButton aria-label="share">
          <ShareIcon style={{color: "#000000"}}/>
        </IconButton>
        
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
      <button class="bn632-hover bn18">Know more</button>
      </div>
    </Box>
      </CardActions>
            <div class="card-name">
                <p>Mysore Palace, Mysore</p>
            </div>
        </article>
    </main>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </div>
  )
}

export default Card2