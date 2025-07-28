import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ComplaintForm = () => {
  const [buildingImages, setBuildingImages] = useState<File[]>([]);
  const [qrImage, setQrImage] = useState<File | null>(null);
  const [imageLimitError, setImageLimitError] = useState<string>('');

  const handleBuildingImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const selectedFiles = Array.from(files);
    if (buildingImages.length + selectedFiles.length > 4) {
      setImageLimitError('Image limit exceeded (max 4 allowed).');
      return;
    }

    setBuildingImages((prev) => [...prev, ...selectedFiles]);
    setImageLimitError('');
  };

  const handleQrImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setQrImage(file);
  };

  const removeBuildingImage = (index: number) => {
    setBuildingImages((prev) => prev.filter((_, i) => i !== index));
  };
  const navigate=useNavigate();
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 border border-orange-200">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-6 text-orange-600">Complaint Form</h1>
      </div>
      
      <form className="space-y-6">
        <div style={{justifyContent:'center',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <label className="block mb-1 font-medium">Upload Digital Address QR(Under Har Ghar Ka Digital Pata Scheme) </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleQrImageUpload}
            className="bg-orange-500 text-white px-4 py-2 rounded cursor-pointer"
            style={{width:'50%'}}
          />
          {qrImage && <p className="mt-2">{qrImage.name}</p>}
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>or</div>
        <p style={{display:'flex',justifyContent:'center',fontWeight:'bold'}}>Enter the Address Details:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Building Name/Number <span className="text-red-500">*</span></label>
            <input placeholder="Enter Building Name/Number" className="w-full p-2 border rounded-md" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Area <span className="text-red-500">*</span></label>
            <input placeholder="Enter area" className="w-full p-2 border rounded-md" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Landmark <span className="text-red-500">*</span></label>
            <input placeholder="Enter landmark" className="w-full p-2 border rounded-md" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Street Name</label>
            <input placeholder="Enter street name (if any)" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Colony Name</label>
            <input placeholder="Enter colony name" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Ward Name</label>
            <input placeholder="Enter ward name" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Ward Number <span className="text-red-500">*</span></label>
            <input placeholder="Enter ward number" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Pin Code <span className="text-red-500">*</span></label>
            <input placeholder="Enter Pin Code" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block mb-1 font-medium">City <span className="text-red-500">*</span></label>
            <input placeholder="Enter city" className="w-full p-2 border rounded-md" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">State <span className="text-red-500">*</span></label>
            <input placeholder="Enter state" className="w-full p-2 border rounded-md" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Country <span className="text-red-500">*</span></label>
            <input placeholder="Enter country" className="w-full p-2 border rounded-md" required />
          </div>
        </div>

        <div >
          <label className="block mb-1 font-medium">Upload Building Images (Max 4)</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleBuildingImageUpload}
            className="bg-orange-500 text-white px-4 py-2 rounded cursor-pointer"
          />
          {imageLimitError && <p className="text-red-500 mt-1">{imageLimitError}</p>}
          <ul className="list-disc pl-5 mt-2">
            {buildingImages.map((file, index) => (
              <li key={index} className="flex justify-between items-center">
                {file.name}
                <button
                  type="button"
                  className="text-red-500 ml-4 text-sm"
                  onClick={() => removeBuildingImage(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div style={{display:'flex',justifyContent:'center',fontWeight:'bold'}}>Complainer's Details(Optional):</div>
        <span className="text-red-500">*Note-If complainer choose to be anonymous and not submit his/her details they will not recieve the reward for their complain </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Complainer Name</label>
            <input placeholder="Enter name (optional)" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Age</label>
            <input type="number" placeholder="Enter age (optional)" className="w-full p-2 border rounded-md" />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-1 font-medium">Address</label>
            <input placeholder="Enter address (optional)" className="w-full p-2 border rounded-md" />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-1 font-medium">Mobile Number</label>
            <input placeholder="Enter mobile number (optional)" className="w-full p-2 border rounded-md" />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Complaint Reason</label>
          <input placeholder="Type here" className="w-full p-2 border rounded-md"/>
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
            onClick={()=>[navigate('/complain_done')]}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComplaintForm;
