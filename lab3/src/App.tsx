import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './App.css';

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phone: yup.string()
    .matches(/^\+380\d{9}$/, "Phone must be in format +380XXXXXXXXX")
    .required("Phone is required"),
  city: yup.string().required("City is required"),
  warehouse: yup.string().required("Warehouse is required"),
  
  senderName: yup.string().required("Sender name is required"),
  senderPhone: yup.string()
    .matches(/^\+380\d{9}$/, "Phone must be in format +380XXXXXXXXX")
    .required("Sender phone is required"),
  senderCity: yup.string().required("Sender city is required"),
  senderWarehouse: yup.string().required("Sender warehouse is required"),
  
  cargoType: yup.string().required("Cargo type is required"),
  weight: yup.number().positive().required("Weight is required"),
  declaredValue: yup.number().positive().required("Declared value is required"),
  paymentMethod: yup.string().required("Payment method is required"),
}).required();

type FormData = yup.InferType<typeof schema>;

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 flex justify-center items-center min-h-screen">
      <div className="w-full">
      <h1 className="text-2xl font-bold text-center mb-8">Оформлення доставки</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          Дані отримувача
          </h2>
          
          <div className="space-y-4">
          <div>
            <label className="block mb-1">Ім'я</label>
            <input
            {...register("firstName")}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Прізвище</label>
            <input
            {...register("lastName")}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Номер телефону</label>
            <div className="relative">
            <input
              {...register("phone")}
              placeholder="+380XXXXXXXXX"
              className="w-full p-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            </div>
            {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Місто</label>
            <input
            {...register("city")}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Відділення</label>
            <input
            {...register("warehouse")}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.warehouse && (
            <p className="text-red-500 text-sm mt-1">{errors.warehouse.message}</p>
            )}
          </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          Дані відправника
          </h2>
          
          <div className="space-y-4">
          <div>
            <label className="block mb-1">Ім'я</label>
            <input
            {...register("senderName")}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.senderName && (
            <p className="text-red-500 text-sm mt-1">{errors.senderName.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Номер телефону</label>
            <div className="relative">
            <input
              {...register("senderPhone")}
              placeholder="+380XXXXXXXXX"
              className="w-full p-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            </div>
            {errors.senderPhone && (
            <p className="text-red-500 text-sm mt-1">{errors.senderPhone.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Місто</label>
            <input
            {...register("senderCity")}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.senderCity && (
            <p className="text-red-500 text-sm mt-1">{errors.senderCity.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Відділення</label>
            <input
            {...register("senderWarehouse")}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.senderWarehouse && (
            <p className="text-red-500 text-sm mt-1">{errors.senderWarehouse.message}</p>
            )}
          </div>
          </div>
        </section>
        </div>

        <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        Дані відправлення
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
          <label className="block mb-1">Тип відправлення</label>
          <select
            {...register("cargoType")}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Оберіть тип відправлення</option>
            <option value="parcel">Посилка</option>
            <option value="documents">Документи</option>
            <option value="pallet">Велика посилка</option>
          </select>
          {errors.cargoType && (
            <p className="text-red-500 text-sm mt-1">{errors.cargoType.message}</p>
          )}
          </div>

          <div>
          <label className="block mb-1">Вага (kg)</label>
          <input
            type="number"
            step="0.1"
            {...register("weight")}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {errors.weight && (
            <p className="text-red-500 text-sm mt-1">{errors.weight.message}</p>
          )}
          </div>

          <div>
          <label className="block mb-1">Оголошена цінність (UAH)</label>
          <div className="relative">
            <input
            type="number"
            {...register("declaredValue")}
            className="w-full p-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          {errors.declaredValue && (
            <p className="text-red-500 text-sm mt-1">{errors.declaredValue.message}</p>
          )}
          </div>

          <div>
          <label className="block mb-1">Метод оплати</label>
          <select
            {...register("paymentMethod")}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Оберіть метод оплати</option>
            <option value="cash">Готівка</option>
            <option value="card">Карта</option>
            <option value="account">Карта ФОП</option>
          </select>
          {errors.paymentMethod && (
            <p className="text-red-500 text-sm mt-1">{errors.paymentMethod.message}</p>
          )}
          </div>
        </div>
        </section>

        <button
        type="submit"
        className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
        >
        Створити доставку
        </button>
      </form>
      </div>
    </div>
  );
}

export default App;