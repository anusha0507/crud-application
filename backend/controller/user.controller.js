import User from "../model/user.model.js";

export const create = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;

    if (!fname || !lname || !email || !password) {
      return res.status(400).json({ msg: "All fields are required." });
    }

    const userData = new User(req.body);
    const savedData = await userData.save();

    return res.status(200).json({
      data: savedData,
      msg: "User created successfully"
    });
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const getAll = async (req, res) => {
  try {
    const userData = await User.find();
    if (userData.length === 0) {
      return res.status(404).json({ msg: "No users found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getUser = async (req, res) =>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);

        if(!userExist){
            return res.status(404).json({msg: "User not found"});
        }
        res.status(200).json(userExist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const update = async (req, res) =>{
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    if(!userExist){
      return res.status(404).json({msg: "User not found"});
    }

    const updatedUser = await User.findByIdAndUpdate(id, req.body, {new: true});
    return res.status(200).json({
      data: updatedUser,
      msg: "User updated successfully"
    });

  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

export const deleteUser = async(req, res) =>{
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if(!userExist){
      return res.status(404).json({msg: "User not found"});
    }

    await User.findByIdAndDelete(id);
    res.status(200).json({msg:"User deleted successfully"});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}