require 'test_helper'

class FlipsControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
    assert_select "title", "Flip"
  end

  test "should get signin" do
    get :signin
    assert_response :success
    assert_select "title", "Sign in -Flip"
  end

  test "should get signup" do
    get :signup
    assert_response :success
    assert_select "title", "Sign up -Flip"
  end

end
