import '../components/css/payment.css';
export const MoMo = () => {
    return (
        <>
            <div className="Payment-Page">
                <div class="card mt-50 mb-50">
                    <div class="card-title mx-auto"> Payment </div>
                    <form className='Form-Payment'>
                        <div class="nav">
                            <ul class="mx-auto">
                                <li><a href="/payment">Credit-Card </a></li>
                                <li class="active"><a href="/momo">MoMo</a></li>
                            </ul>
                        </div>
                        <div className='Img-Momo'>
                            <img src='/images/momo.png' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}