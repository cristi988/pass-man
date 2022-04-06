<template>

    <div class="col-12 col-md-6 col-xl-4">
        <div class="card mx-auto bg-dark text-light mx-auto px-3 py-2">
            <div class="card-body d-flex justify-content-between">
                <div class="favicon border border-light">
                    <img :src="d.iconPath" >
                </div>          
                <h3 class="card-title mt-3"> Google.com </h3>
                <div class="icons mt-2">
                    <button class="button-NB"><i class="bi bi-trash text-light" style="font-size: 25px;"></i></button>
                </div>
            </div>

            <hr>

            <div class="username">
                <div class="main-content mb-3 d-flex justify-content-between">
                    <div class="icons-static" style=" margin-left: 5px; margin-top: 3px;">
                        <i class="bi bi-person " style="font-size: 35px;"></i>
                    </div>

                    <div class="mt-3" >
                        <p >Username</p>
                    </div>

                    <div class="icons" style=" margin-right: 5px; margin-top: 3px;">
                        <button class="button-NB"><i class="bi bi-files text-light" style="font-size: 20px;"></i></button>
                    </div>
                </div>
            </div>

            <div class="password">
                <div class="main-content mb-3 d-flex justify-content-between">
                    <div class="icons-static" style=" margin-left: 5px; margin-top: 3px;">
                        <i class="bi bi-key" style="font-size: 35px;"></i>
                    </div>

                    <div class="mt-3" >
                        <p>*********</p>
                    </div>

                    <div class="icons" style=" margin-right: 5px; margin-top: 3px;">
                        <button class="button-NB"><i class="bi bi-files text-light" style="font-size: 20px;"></i></button>
                    </div>
                </div>
            </div>

            <div class="description d-flex justify-content-center">
                <p>fghjkl;lkjhgvcvgbhjk</p>
            </div>

            <div class="action-container d-flex justify-content-between mt-3">
                <button  class="edit btn col-3"><i class="bi bi-pencil text-light" style="font-size: 25px;"></i></button>
                <button  class="share btn col-3"><i class="bi bi-share text-light" style="font-size: 25px;"></i></button>
            </div>

        </div> 
    </div>
      
</template>

<script>
export default {
    name : 'CardModal',
    props: {
        details : Object,        
    },
    computed:{
        d(){
            if(this.details){
                return this.details
            }else{
                return {
                target : '',
                username : '',
                password : '',
                tag : '',
                iconPath :'../images/target.png'                
            }
            }
            
        }
    }
}
</script>


<style lang="scss" scoped>

.card {
    border-radius: 15px !important;
    .card-body{
        .favicon{
            width: 70px;
            height: 70px;
            border-radius: 50%;
            display:flex;
            align-items: center;
            justify-content: center;
            
                img{
                    width: 60px;
                    height: 60px;
                }
        }
    }
    .button-NB {
        background: none;
        border: none;
    }
    .icons-static{
        background-color: #50585F;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center; 
    }
    .icons{
        background-color: #50585F;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
         &:hover{
           background-color: white;
            button{
                .bi{
                    color: black !important;
                }
            }
        }
    }
    .main-content {
        background-color: #3E444A;
        border-radius: 51px;
    }
    .description {
        border-radius: 15px;
        background-color: #3E444A;
        height: 70px;
    }
    .action-container {
        .edit{
            border-radius: 51px;
            background-color: none;
            border-color: #28A745;
            &:hover{
                background-color: #28A745;
            }
        }
        .share {
            border-radius: 51px;
            background-color: none;
            border-color: #1DC1C7;
             &:hover{
                background-color: #1DC1C7;
            }
        }
    }   
}

@import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
@import '/node_modules/bootstrap/dist/css/bootstrap.css' 
</style>