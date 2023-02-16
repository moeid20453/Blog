import React from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/menu';

const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="user">
                  <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                  <div className="info">
                    <span>john</span>
                    <p>posted 2 days ago</p>
                  </div>
                  <div className="edit">
                    <Link to={`/write?edit=2`}>
                      <img src={Edit} alt="" />
                    </Link>
                    <img src={Delete} alt="" />
                  </div>
                </div>
              <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Officiis consequatur deleniti saepe facilis nulla quibusdam.
                Ipsa repellat quos illo quisquam,
                <br/>
                laborum dolore sapiente repudiandae consequatur officiis cumque inventore
                 sequi aperiam aspernatur consequuntur dicta voluptatum blanditiis sed! Blanditiis commodi architecto exercitationem.
                <br/>
                Perferendis nemo accusamus quasi ullam nostrum sequi ipsum, eos omnis.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error exercitationem sunt est laudantium ipsum doloribus magnam, maxime temporibus harum similique enim maiores eligendi dolores. Molestiae, ipsum! Mollitia, quos error? Qui libero, quasi odio sint cum nesciunt repudiandae magnam nobis necessitatibus ipsam, corrupti, itaque quidem iusto quisquam atque repellendus amet? 
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus nostrum dolor illum? Libero ex sapiente nemo, earum autem blanditiis error dolore ab magnam eius corporis, ut quod officiis tempora cum, illum aut. Enim, ab cupiditate odit aliquam deleniti aliquid! Voluptate impedit quidem deleniti minima sed eligendi dignissimos ipsa hic.
                </p>
            </div>
          <Menu />
        </div>
        
    );
};

export default Single;