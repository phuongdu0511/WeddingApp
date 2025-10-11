import React, { useState } from "react";
import "../assets/css/Confirm.css";
import type { Guest } from "../types/Guest";
import { API_BASE_URL } from "../config/api";
import axios from "axios";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/gif/LoadingDot.json";

interface ConfirmProps {
  onClose: () => void;
  guest: Guest | null;
  setGuest: React.Dispatch<React.SetStateAction<Guest | null>>;
}

const Confirm: React.FC<ConfirmProps> = ({ onClose, guest, setGuest }) => {
  const api = axios.create({
    baseURL: API_BASE_URL,
  });
  let flagGuest: boolean = false;
  if (guest?.guestName != null && guest.guestName != undefined) {
    flagGuest = true;
  }
  const [guestName, setGuestName] = useState("");
  const [status, setStatus] = useState<boolean | null>(guest?.status ?? null);
  const [partner, setPartner] = useState<number | null>(guest?.partner ?? null);
  const [thankYou, setThankYou] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorInput, setErrorInput] = useState<boolean>(false);
  const [errorStatus, setErrorStatus] = useState<boolean>(false);
  const [errorPartner, setErrorPartner] = useState<boolean>(false);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value;
    // v === "" => null, v === "1" => true, v === "0" => false
    setStatus(v === "" ? null : v === "1");
  };

  const handlePartnerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value;
    setPartner(v === "" ? null : Number(v));
  };

  const payload = {
    guestName: guest?.guestName ?? guestName,
    guestPath: guest?.guestPath,
    status: status,
    partner: partner,
  };

  const confirm = async () => {
    const nameErr = !payload.guestName.trim();
    const statusErr = payload.status == null;
    const partnerErr =
      payload.partner == null && (payload.status || payload.status == null);

    setErrorInput(nameErr);
    setErrorStatus(statusErr);
    setErrorPartner(partnerErr);

    if (nameErr || statusErr || partnerErr) return;

    try {
      setLoading(true);
      await api.post(`/api/Guest/addOrUpdate`, payload);
      if (guest?.guestName != null) {
        const updated = { ...guest, status, partner };
        setGuest(updated);
      }
      setLoading(false);
      setThankYou(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999]"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Overlay mờ */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose} // bấm ra ngoài sẽ đóng
      ></div>

      {/* Nội dung Confirm */}
      <div id="SECTION_POPUP" className="ladi-section">
        <div className="ladi-section-background"></div>
        <div className="ladi-container">
          {loading && (
            <div
              className="absolute z-40 fixed inset-0"
              style={{ pointerEvents: "auto" }}
            >
              <div
                className="h-full flex align-items-center"
                style={{ width: 400, margin: "auto" }}
              >
                <Lottie animationData={loadingAnimation} loop={true} />
              </div>
            </div>
          )}
          {/* Popup Thank you */}
          {thankYou && (
            <div id="POPUP1" className="absolute">
              <div className="ladi-popup">
                <div className="ladi-popup-background"></div>
                <div id="GROUP31" className="absolute">
                  <div className="ladi-group">
                    <div id="IMAGE32" className="absolute">
                      <button
                        onClick={onClose}
                        className="absolute z-40 w-12 right-[4%] top-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
                      >
                        ×
                      </button>
                      <div className="ladi-image">
                        <div className="ladi-image-background"></div>
                      </div>
                    </div>
                    <div id="IMAGE34" className="absolute">
                      <div className="ladi-image">
                        <div className="ladi-image-background"></div>
                      </div>
                    </div>
                    <div id="IMAGE33" className="absolute">
                      <div className="ladi-image">
                        <div className="ladi-image-background"></div>
                      </div>
                    </div>
                    <div id="BOX33" className="absolute">
                      <div className="ladi-box ladi-transition"></div>
                    </div>
                    <div id="PARAGRAPH1" className="absolute">
                      <div className="ladi-paragraph font-lora">
                        Cảm ơn bạn đã dành thời gian phản hồi.
                      </div>
                      <div className="ladi-paragraph font-lora">
                        Chúng mình vô cùng trân quý sự quan tâm của bạn.
                      </div>
                    </div>
                    <div id="PARAGRAPH2" className="absolute">
                      <div className="ladi-paragraph font-snellRoundhand">
                        Thank you!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Popup Confirm */}
          {!thankYou && (
            <div id="POPUP2" className="absolute">
              <div className="ladi-popup">
                <div className="ladi-popup-background"></div>
                <div id="IMAGE58" className="absolute">
                  <button
                    onClick={onClose}
                    className="absolute z-40 w-12 right-[4%] top-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
                  >
                    ×
                  </button>
                  <div className="ladi-image">
                    <div className="ladi-image-background"></div>
                  </div>
                </div>
                <div id="BOX37" className="absolute">
                  <div className="ladi-box ladi-transition"></div>
                </div>
                <div id="FORM2" className="flex justify-center">
                  <div id="FORM_ITEM3" className="absolute">
                    <div
                      className="ladi-form-item-container"
                      style={{
                        borderColor: errorInput ? "red" : "rgb(146, 131, 98)",
                      }}
                    >
                      <div className="ladi-form-item">
                        <input
                          className="ladi-form-control-select"
                          placeholder="Tên của bạn"
                          defaultValue={guest?.guestName}
                          disabled={flagGuest}
                          maxLength={40}
                          onChange={(e) => setGuestName(e.target.value)}
                          required
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div id="FORM_ITEM4" className="absolute">
                    <div
                      className="ladi-form-item-container"
                      style={{
                        borderColor: errorStatus ? "red" : "rgb(146, 131, 98)",
                      }}
                    >
                      <div className="ladi-form-item">
                        <select
                          name="form_item7"
                          className="ladi-form-control font-lora ladi-form-control-select"
                          defaultValue={
                            guest?.status === null ||
                            guest?.status === undefined
                              ? "" // chưa có dữ liệu thì hiển thị option mặc định
                              : guest?.status
                              ? "1" // true  => "1"
                              : "0" // false => "0"
                          }
                          onChange={handleStatusChange}
                        >
                          <option value="">Bạn sẽ đến chứ?</option>
                          <option value="1">Mình chắc chắn sẽ đến</option>
                          <option value="0">Xin lỗi mình bận rồi!</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div id="FORM_ITEM5" className="absolute">
                    <div
                      className="ladi-form-item-container"
                      style={{
                        borderColor: errorPartner ? "red" : "rgb(146, 131, 98)",
                      }}
                    >
                      <div className="ladi-form-item">
                        <select
                          name="form_item8"
                          className="ladi-form-control font-lora ladi-form-control-select"
                          defaultValue={guest?.partner ?? ""}
                          onChange={handlePartnerChange}
                        >
                          <option value="">Bạn tham dự cùng ai?</option>
                          <option value="0">Tham dự một mình</option>
                          <option value="1">Tham dự cùng 1 người</option>
                          <option value="2">Tham dự cùng 2 người</option>
                          <option value="3">Tham dự cùng 3 người</option>
                          <option value="4">Tham dự cùng 4 người</option>
                          <option value="5">Tham dự cùng 5 người</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div
                    id="BUTTON5"
                    className="absolute cursor-pointer"
                    onClick={confirm}
                  >
                    <div className="ladi-button">
                      <div className="ladi-button-background absolute"></div>
                      <div id="BUTTON_TEXT5" className="absolute">
                        <p className="ladi-headline font-lora">xác nhận</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Confirm;
