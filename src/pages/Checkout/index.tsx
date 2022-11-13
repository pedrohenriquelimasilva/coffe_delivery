import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { CoffeDelivery, AdressUserProps } from '../../Context/ContextProvider'
import { toast } from 'react-toastify'
import {
  ContenainerStyle,
  ContentMainStyle,
  TitleCampStyle,
  BaseInput,
  AdressInformStyle,
  FormContentStyle,
  ContentFormStyle,
  InputAdjunct,
  FormContainer,
  Currency,
  FormOfPaymentStyle,
  BaseInputCheckebox,
} from './style'
import { CurrencyCondirmOrder } from './components/CurrencyConfirmOrder'

export function Checkout() {
  const { confirmeAdressUser } = useContext(CoffeDelivery)
  const [adressUser, setAdressUser] = useState<AdressUserProps>(
    {} as AdressUserProps,
  )

  function handleModifyAdress(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setAdressUser((state) => ({ ...state, current: event.target.value }))
    } else {
      setAdressUser((state) => ({
        ...state,
        [event.target.id]: event.target.value,
      }))
    }
  }

  function submitForm(event: FormEvent) {
    try {
      if (adressUser.current) {
        confirmeAdressUser(adressUser)
        toast.success('Pedido Enviado!', {
          position: toast.POSITION.TOP_LEFT,
        })
      } else {
        throw new Error()
      }
    } catch (err) {
      event.preventDefault()

      toast.warn('Pedido pendente', {
        position: toast.POSITION.TOP_LEFT,
      })
    }
  }

  return (
    <ContenainerStyle>
      <ContentMainStyle>
        <TitleCampStyle>Complete seu pedido</TitleCampStyle>
        <FormContainer
          id="adress-cliente"
          onSubmit={submitForm}
          action="http://127.0.0.1:5173/success"
          method="GET"
        >
          <FormContentStyle>
            <AdressInformStyle iconColor="yellow">
              <MapPinLine size={20} className="mapPin" />
              <div>
                <strong>Endereço de Entrega</strong>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </AdressInformStyle>

            <ContentFormStyle>
              <div className="cep-adreess">
                <label htmlFor="CEP">
                  <BaseInput
                    id="CEP"
                    placeholder="CEP"
                    onChange={handleModifyAdress}
                    required
                  />
                </label>
              </div>

              <div>
                <label htmlFor="street">
                  <BaseInput
                    id="street"
                    onChange={handleModifyAdress}
                    placeholder="Rua"
                    required
                  />
                </label>
              </div>

              <div className="complement">
                <div className="numberComplement">
                  <label htmlFor="numberHouse">
                    <BaseInput
                      id="numberHouse"
                      placeholder="Número"
                      onChange={handleModifyAdress}
                      required
                    />
                  </label>
                </div>

                <InputAdjunct>
                  <label htmlFor="adjunct">
                    <BaseInput
                      id="adjunct"
                      onChange={handleModifyAdress}
                      placeholder="Complemento"
                    />
                    <span>Opcional</span>
                  </label>
                </InputAdjunct>
              </div>

              <div className="data-city">
                <div>
                  <label htmlFor="adress">
                    <BaseInput
                      id="adress"
                      placeholder="Bairro"
                      onChange={handleModifyAdress}
                      required
                    />
                  </label>
                </div>

                <div>
                  <label htmlFor="city">
                    <BaseInput
                      id="city"
                      placeholder="Cidade"
                      onChange={handleModifyAdress}
                      required
                    />
                  </label>
                </div>

                <div>
                  <label htmlFor="state">
                    <BaseInput
                      id="state"
                      placeholder="UF"
                      onChange={handleModifyAdress}
                      required
                    />
                  </label>
                </div>
              </div>
            </ContentFormStyle>
          </FormContentStyle>

          <Currency>
            <AdressInformStyle iconColor="purple">
              <CurrencyDollar size={20} className="currencyDollar" />
              <div>
                <strong>Endereço de Entrega</strong>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </AdressInformStyle>

            <FormOfPaymentStyle>
              <div>
                <BaseInputCheckebox
                  onChange={handleModifyAdress}
                  type="radio"
                  name="current"
                  id="currentCard"
                  onClick={(event) => console.log(event)}
                  value="Cartão de Crédito"
                />
                <label htmlFor="currentCard">
                  <CreditCard size={20} />
                  <span>Cartão de Crédito</span>
                </label>
              </div>
              <div>
                <BaseInputCheckebox
                  onChange={handleModifyAdress}
                  type="radio"
                  name="current"
                  id="currentCardDebit"
                  value="Cartão de Débito"
                />
                <label htmlFor="currentCardDebit">
                  <Bank size={20} />
                  <span>Cartão de Débito</span>
                </label>
              </div>

              <div>
                <BaseInputCheckebox
                  onChange={handleModifyAdress}
                  type="radio"
                  name="current"
                  id="currentMoney"
                  value="Dinheiro"
                />
                <label htmlFor="currentMoney">
                  <Money size={20} />
                  <span>Dinheiro</span>
                </label>
              </div>
            </FormOfPaymentStyle>
          </Currency>
        </FormContainer>
      </ContentMainStyle>

      <aside>
        <TitleCampStyle>Cafés selecionados</TitleCampStyle>

        <CurrencyCondirmOrder />
      </aside>
    </ContenainerStyle>
  )
}
