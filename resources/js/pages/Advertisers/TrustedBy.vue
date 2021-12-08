<template>
  <div class="parent">
    <!-- <h2>Trusted By</h2>
    <div class="logos">
        <div class="logo-div">
           <img :src="require('../../../assets/images/brand-20.png').default" alt="" /> 
        </div>
        <div class="logo-div">
           <img :src="require('../../../assets/images/brand-25.png').default" alt="" /> 
        </div>
        <div class="logo-div">
           <img :src="require('../../../assets/images/brand-8.png').default" alt="" /> 
        </div>
        <div class="logo-div">
           <img :src="require('../../../assets/images/brand-9.png').default" alt="" /> 
        </div>
        <div class="logo-div">
           <img :src="require('../../../assets/images/brand-17.png').default" alt="" /> 
        </div>
    </div> -->
    <h2>Trusted By</h2>
    <div class="container">
      <ul class="nav nav-pills">
        <li><a data-toggle="pill" href="#automotive">Automotive</a></li>
        <li><a data-toggle="pill" href="#banking">Banking</a></li>
        <li><a data-toggle="pill" href="#consumer-electronics">Consumer Electronics</a></li>
        <li><a data-toggle="pill" href="#delivery">Delivery</a></li>
        <li><a data-toggle="pill" href="#energy">Energy</a></li>
        <li><a data-toggle="pill" href="#finance">Finance</a></li>
        <li><a data-toggle="pill" href="#fmcg">FMCG</a></li>
        <li><a data-toggle="pill" href="#food">Food & Beverages</a></li>
        <li><a data-toggle="pill" href="#ngo">NGO</a></li>
        <li><a class="active" data-toggle="pill" href="#telco">Telco</a></li>
      </ul>

      <div class="tab-content">
        <div id="automotive" class="tab-pane fade">
          <div class="logos">
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-4.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-5.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-14.png').default" alt="" /> 
                </div>
            </div>
        </div>
        <div id="telco" class="tab-pane fade active">
          <div class="logos">
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-1.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-7.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-13.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-16.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-19.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-32.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-35.png').default" alt="" /> 
                </div>
            </div>
        </div>
        <div id="ngo" class="tab-pane fade">
          <div class="logos">
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-34.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-31.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-28.png').default" alt="" /> 
                </div>
            </div>
        </div>
        <div id="banking" class="tab-pane fade">
          <div class="logos">
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-3.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-12.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-22.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-33.png').default" alt="" /> 
                </div>
            </div>
        </div>
        <div id="fmcg" class="tab-pane fade">
          <div class="logos">
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-10.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-18.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-25.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-21.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-27.png').default" alt="" /> 
                </div>
            </div>
        </div>
        <div id="food" class="tab-pane fade">
          <div class="logos">
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-9.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-15.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-20.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-24.png').default" alt="" /> 
                </div>
            </div>
        </div>
        <div id="finance" class="tab-pane fade">
          <div class="logos">
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-8.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-11.png').default" alt="" /> 
                </div>
            </div>
        </div>
        <div id="energy" class="tab-pane fade">
          <div class="logos">
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-30.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-36.png').default" alt="" /> 
                </div>
            </div>
        </div>
        <div id="delivery" class="tab-pane fade">
          <div class="logos">
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-17.png').default" alt="" /> 
                </div>
            </div>
        </div>
        <div id="consumer-electronics" class="tab-pane fade">
          <div class="logos">
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-2.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-6.png').default" alt="" /> 
                </div>
                <div class="logo-div">
                <img :src="require('../../../assets/images/brand-26.png').default" alt="" /> 
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrustedBy",
};
</script>

<style lang="scss" scoped>
.container{
    /* border: 1px solid black; */
}

ul{
    /* border: 1px solid blue; */
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1px solid #669ca7;

    li{
        /* border: 1px solid red; */
        padding: .4rem .4rem;
        /* background: linear-gradient(90deg, #1bbd98 11%, #225577 100%); */
        /* border: 1px solid transparent; */
        /* border-radius: 15px; */

        a{
            color: #669ca7;
            opacity: .7;
            font-weight: 400;
            letter-spacing: .05rem;
            font-size: .8rem !important;

            &:hover{
               color: #257282;
               opacity: 1;
               font-weight: 600;
            }   
        }

        .active{
                color: #257282;
                opacity: 1;
               font-weight: 600;   
            }
    }

    li.active{
        border: 1px solid red;

        a{
            color: #257282;
            opacity: 1;
               font-weight: 600; 
        }
    }

    .active{
        /* background: red; */
        /* color: #fff !important; */
        /* a{
                  color: #257282;
                  font-weight: 600;
                  opacity: 1;
               } */

               
    }
    /* &:not(.active){
        a{
                  color: #669ca7;
                  font-weight: 400;
                  opacity: 1;
               }
    } */



}

.tab-content{
    /* border: 1px solid red; */
    padding: 2rem 0;
    display: grid;
    place-items: center;

    img{
        /* filter: grayscale(100%); */
    }

    .active{
        opacity: 1;
        /* border: 1px solid red; */
        /* margin: 0 auto; */
    }
}

.parent{
    padding: 3rem;
    background: #ecf4f6;

    h2{
        text-align: center;
        font-size: 2.5rem;
        letter-spacing: .1rem;
    }
}

.logos{
    /* display: flex;
    align-items: center;
    justify-content: space-around; */
    /* width: 80%; */
    margin: 0 auto;

    display:grid;
    grid-template-columns: repeat(8, 150px);
    row-gap: 2rem;

    .logo-div{
        /* border: 1px solid blue; */

        img{
            width: 100%;
        }
    }
}

@media (max-width: 480px){
    .parent{
    padding: 2rem 0rem;

    h3{
        text-align: center;
    }
}

.logos{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    margin: 1rem auto;

    .logo-div{
        /* border: 1px solid red; */

        img{
            width: 100%;
        }
    }
}
}
</style>