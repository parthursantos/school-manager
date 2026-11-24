import userService from "../services/userService.js";

const getMe = async (req, res, next) => {
  try {
    res.status(200).json({
      message: " Usuário logado encontrado",
      data: req.user,
    });
  } catch (error) {
    next(error);
  }
};

const updateMe = async (req, res, next) => {
  try {
    const user = await userService.updateMe(
      req.user,
      req.body
    );

    res.status(200).json({
      message: "Perfil atualizado com sucesso",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const user = await userService.getUsers();

    res.status(200).json({
      message: "Usuarios encontrados com sucesso",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getMe,
  updateMe,
  getUsers,
};
